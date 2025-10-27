import React, { Component } from 'react'
import { Alert, FlatList, ScrollView, Text, TextInput, View } from 'react-native'
import { observer } from 'mobx-react/native'
import { computed, observable } from 'mobx'
import TextFieldView from '../componentViews/TextFieldView'
import stores from '../stores'
import GlobalStyle from '../services/GlobalStyle'
import NavBar from '../components/NavBar'
import IconButton from '../components/IconButton'
import GlobalState from '../services/GlobalState'
import QuickPickView from '../componentViews/QuickPickView'
import api from '../api'
import MultiPickerView from '../componentViews/MultiPickerView'
import { FormController } from '../components/Form'
import ListItem from '../components/ListItem'
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import ActionButton from 'react-native-circular-action-menu'
import IconFA from 'react-native-vector-icons/FontAwesome'
import { AdvancedSearch } from './ViewResponses'
import libForm from '../lib/form'
import FieldBase from '../componentViews/FieldBase'
import Translate from '../services/Translate'

@observer
class Reporting extends Component {
  createAReport = () => {
    GlobalState.navigation.push({ view: <ReportDetail /> })
  }

  viewReport = report => () => {
    GlobalState.navigation.push({ view: <ReportDetail report={report} /> })
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Select Dashboard Report' />
        {stores.reports.data.length ? <View style={{ flex: 1 }}>
          <FlatList
            style={{ flex: 1 }}
            data={stores.reports.data}
            initialNumToRender={10}
            keyExtractor={item => item.guid}
            renderItem={({ item }) => <ListItem label={item.name || 'Untitled report'} onPress={this.viewReport(item)} />}
          />
          <View style={{ padding: 10 }}>
            <IconButton translate label='Create a report' name='plus' onPress={this.createAReport} />
          </View>
        </View>
          : <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', padding: 20, fontSize: 24 }}>{Translate.do(`You don't have any reports`)}</Text>
            <IconButton translate label='Create a report' name='plus' onPress={this.createAReport} />
          </View>
        }

      </View>
    )
  }
}

@observer
class ReportDetail extends Component {
  @observable report

  constructor (props) {
    super(props)
    if (!props.report) {
      this.report = stores.reports.create()
    } else {
      this.report = props.report
    }
    this.originalReport = JSON.stringify(props.report)
  }

  addReportItem = () => {
    GlobalState.navigation.push({ view: <ReportItemDetail item={this.report.addItem()} onDelete={this.onDeleteItem} /> })
  }

  onDeleteItem = item => {
    this.report.items.splice(this.report.items.indexOf(item))
    GlobalState.navigation.pop()
  }

  editItem = item => {
    return () => {
      GlobalState.navigation.push({ view: <ReportItemDetail item={item} onDelete={this.onDeleteItem} /> })
    }
  }

  save = () => {
    this.report.save()
    GlobalState.navigation.pop()
  }

  delete = () => {
    Alert.alert(Translate.do('Delete'), Translate.do('Are you sure you want to delete this report?'), [{
      text: Translate.do('Cancel'),
      style: 'cancel'
    }, {
      text: Translate.do('Delete'),
      onPress: () => {
        this.report.remove()
        GlobalState.navigation.pop()
      }
    }])
  }

  changeName = value => {
    this.report.name = value
  }

  onBack = () => {
    if (JSON.stringify(this.report) !== this.originalReport) {
      Alert.alert(Translate.do('Report changed'), Translate.do('Do you want to save your changes?'), [
        {
          text: Translate.do('Cancel'),
          style: 'cancel'
        },
        {
          text: Translate.do('Don\'t Save'),
          onPress: () => {
            if (this.originalReport) {
              const originalReport = JSON.parse(this.originalReport)
              Object.keys(originalReport).forEach(key => {
                this.report[key] = originalReport[key]
              })
            }
            GlobalState.navigation.pop()
          }
        },
        {
          text: Translate.do('Save Changes'),
          onPress: () => {
            this.save()
          }
        }
      ])
    } else {
      GlobalState.navigation.pop()
    }
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Create a report' handlePop={this.onBack} />
        <TextInput style={{ textAlignVertical: 'center', textAlign: 'center', padding: 10, fontSize: 26 }} underlineColorAndroid='transparent' placeholder={Translate.do('Untitled Report')} value={this.report.name} onChangeText={this.changeName} />

        <ScrollView>
          {this.report.items.map(item => {
            return (<ReportItemDisplay key={item.guid || item._id} {...item} editItem={this.editItem(item)} />)
          })}
        </ScrollView>

        <ActionButton
          buttonColor={GlobalStyle.style.primaryColour}
          position='right'
          outRangeScale={2}
          bgColor='rgba(0,0,0,0.5)'
          radius={180}
        >
          <ActionButton.Item
            size={50}
            buttonColor={GlobalStyle.style.secondaryColour}
            title={Translate.do('Delete Report')}
            onPress={this.delete}>
            <IconFA name='trash' style={{ fontSize: 25, color: GlobalStyle.style.secondaryColourText }} />
          </ActionButton.Item>
          <ActionButton.Item
            size={50}
            buttonColor={GlobalStyle.style.secondaryColour}
            title={Translate.do('Add report item')}
            onPress={this.addReportItem}>
            <IconFA name='plus' style={{ fontSize: 25, color: GlobalStyle.style.secondaryColourText }} />
          </ActionButton.Item>
          <ActionButton.Item
            size={50}
            buttonColor={GlobalStyle.style.secondaryColour}
            title={Translate.do('Save changes')}
            onPress={this.save}>
            <IconFA name='save' style={{ fontSize: 25, color: GlobalStyle.style.secondaryColourText }} />
          </ActionButton.Item>

        </ActionButton>
      </View>
    )
  }
}

@observer
class ReportItemDisplay extends Component {
  @observable data = {}
  @observable interval = this.props.interval

  refresh = () => {
    if (this.props.reportType && this.interval && this.props.form) {
      let url = `/reporting/${this.props.reportType}/${this.interval}/${this.props.form}/${this.props.field}/${this.props.filter || '{}'}`
      if (this.props.reportType === 'filter') {
        url = `/reporting/${this.props.reportType}/${this.interval}/${this.props.form}/${this.props.filter || '{}'}`
      }

      api._call(url)
        .then(data => {
          this.data = data
        })
    }
  }

  componentDidMount () {
    this.refresh()
  }

  @computed get dataPoints () {
    return Object.keys(this.data).map(key => this.data[key].value).reverse()
  }

  setInterval = value => {
    this.interval = value
    this.refresh()
  }

  getChangeLabel (current, prev) {
    const value = (((current / prev) - 1) * 100)
    if (value >= 0) {
      return <Text style={{ color: 'green' }}><IconFA name='arrow-up' /> {value.toFixed(1)}%</Text>
    } else {
      return <Text style={{ color: 'red' }}><IconFA name='arrow-down' /> {value.toFixed(1)}%</Text>
    }
  }

  render () {
    if (this.props.reportType === 'count') {
      return (
        <View style={{
          backgroundColor: GlobalStyle.style.neutralColour,
          margin: 20
        }}>
          <View>
            <View style={{
              borderBottomWidth: 1,
              borderBottomColor: 'red',
              flexDirection: 'row',
              alignItems: 'flex-end'
            }}>
              <View style={{ flex: 1 }}><Text style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: GlobalStyle.style.neutralColourText,
                marginBottom: 6
              }}>{this.props.title ? this.props.title.toUpperCase() : 'UNTITLED'}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <IconButton name='edit' onPress={this.props.editItem} />
                <IconButton name='refresh' onPress={this.refresh} />
              </View>
            </View>
            {this.data[1] ? <View>
              {Object.keys(this.data[1]).map(key =>
                <View key={key} style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: GlobalStyle.style.neutralColourHighlight
                }}>
                  <Text style={{ fontSize: 18, color: GlobalStyle.style.neutralColourText }}>
                    {key}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: GlobalStyle.style.neutralColourText }}>
                    {Math.round(this.data[1][key].value)}
                    {!!this.data[2] && !!this.data[2][key] && <Text style={{ fontWeight: 'normal', fontSize: 14 }}> (prev: <Text style={{ fontWeight: 'bold' }}>{Math.round(this.data[2][key].value)}</Text> {this.getChangeLabel(this.data[1][key].value, this.data[2][key].value)})</Text>}
                  </Text>
                </View>
              )}
            </View> : <Text style={{ color: GlobalStyle.style.neutralColourText }}>{Translate.do('No data, try refreshing')}</Text>}

          </View>

          <QuickPickView settings={{ Label: 'Interval', 'Hide Label': true }}
            options={INTERVALS}
            globalStyle={GlobalStyle.style}
            value={this.interval}
            onChange={this.setInterval} />

        </View>
      )
    } else {
      return (
        <View style={{
          backgroundColor: GlobalStyle.style.neutralColour,
          margin: 20
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            borderBottomColor: GlobalStyle.style.primaryColour,
            borderBottomWidth: 1
          }}>
            <View style={{ padding: 10, flex: 1 }}>
              {this.data[1] ? <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: GlobalStyle.style.neutralColourText
                }}>{Math.round(this.data[1].value)}</Text>
                {!!this.data[2] && !!this.data[2].value &&
                  <View style={{ marginLeft: 10 }}><Text>{Translate.do('Prev:')} {Math.round(Number(this.data[2].value) * 100) / 100} {this.getChangeLabel(this.data[1].value, this.data[2].value)}</Text></View>}
              </View>
                : <Text style={{ color: GlobalStyle.style.neutralColourText }}>{Translate.do('No data, try refreshing')}</Text>}
              <Text style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: GlobalStyle.style.neutralColourText
              }}>{this.props.title ? this.props.title.toUpperCase() : Translate.do('UNTITLED')}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <IconButton name='edit' onPress={this.props.editItem} />
              <IconButton name='refresh' onPress={this.refresh} />
            </View>
          </View>
          {this.dataPoints.length > 1 &&
          <View style={{ height: 150, flexDirection: 'row', backgroundColor: GlobalStyle.style.neutralColour }}>

            <YAxis
              data={this.dataPoints}
              contentInset={{ top: 3, bottom: 4 }}
              labelStyle={{ color: GlobalStyle.style.neutralColourText }}
              formatLabel={value => `${value}`}
              style={{ marginBottom: 19 }}
            />

            <View style={{ flex: 1 }}>
              <LineChart
                style={{ flex: 1, marginLeft: 16 }}
                data={this.dataPoints}
                svg={{
                  stroke: GlobalStyle.style.neutralColourText
                }}
                contentInset={{ top: 3, bottom: 0 }}
                curve={shape.curveLinear}
              />
              <XAxis
                style={{ paddingVertical: 3, marginLeft: 16 }}
                data={this.dataPoints}
                formatLabel={(value, index) => this.dataPoints.length - index}
                labelStyle={{ color: GlobalStyle.style.neutralColourText }}
                contentInset={{ top: 3, bottom: 3 }}
              />
            </View>
          </View>
          }

          <QuickPickView settings={{ Label: 'Interval', 'Hide Label': true }}
            options={INTERVALS}
            globalStyle={GlobalStyle.style}
            value={this.interval}
            onChange={this.setInterval} />

        </View>
      )
    }
  }
}

@observer
class ReportItemDetail extends Component {
  @observable formController = null

  componentDidMount () {
    stores.forms.data.forEach(form => {
      form.selected = false
    })
  }

  onSelectForm = (form) => {
    stores.forms.data.forEach(form => {
      form.selected = false
    })
    form.selected = true
    this.props.item.form = form._id
    this.formController = new FormController({ form, isSearching: true })
    GlobalState.navigation.pop()
  }

  @computed get formLabel () {
    if (this.props.item.form) {
      const form = stores.forms.data.find(form => form._id === this.props.item.form)
      if (!this.formController && form) this.formController = new FormController({ form, isSearching: true })
      return form.name
    } else {
      return Translate.do('Select form')
    }
  }

  onSelectField = field => {
    this.props.item.field = field.value
    field.selected = true
    GlobalState.navigation.pop()
  }

  @computed get fieldLabel () {
    if (this.props.item.field) {
      const selectedField = this.formController.formFields.find(field => field.value.toString() === this.props.item.field.toString())
      if (selectedField) {
        return selectedField.label
      } else {
        return Translate.do('Field no longer exists')
      }
    } else {
      return Translate.do('Select field')
    }
  }

  setReportType = value => { this.props.item.reportType = value }

  setInterval = value => { this.props.item.interval = value }

  setTitle = value => { this.props.item.title = value }

  save = () => {
    GlobalState.navigation.pop()
  }

  filter = () => {
    const form = stores.forms.data.find(form => form._id === this.props.item.form)
    const formCopy = observable(JSON.parse(JSON.stringify(form)))
    if (this.props.item.filter) {
      libForm.hydrateValues(formCopy, { responses: JSON.parse(this.props.item.filter) })
    }
    GlobalState.navigation.push({ view: <AdvancedSearch onSearch={this.onGotFilter} form={formCopy} /> })
  }

  clearFilter = () => {
    this.props.item.filter = undefined
  }

  onGotFilter = filter => {
    this.props.item.filter = JSON.stringify(libForm.extractResponses(filter, true))
  }

  render () {
    return (<View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
      <NavBar title='Report Item' />
      <ScrollView>
        <TextFieldView settings={{ Label: 'Item Title' }}
          onChange={this.setTitle}
          value={this.props.item.title}
          globalStyle={GlobalStyle.style} />
        <QuickPickView settings={{ Label: 'Report Type' }}
          options={REPORT_TYPES}
          globalStyle={GlobalStyle.style}
          value={this.props.item.reportType}
          onChange={this.setReportType} />
        <QuickPickView settings={{ Label: 'Interval' }}
          options={INTERVALS}
          globalStyle={GlobalStyle.style}
          value={this.props.item.interval}
          onChange={this.setInterval} />
        <MultiPickerView
          globalStyle={GlobalStyle.style}
          label='Form'
          labelPath='name'
          options={stores.forms.data}
          values={[{ label: this.formLabel }]}
          pickerScreenTitle='Select form'
          onSelect={this.onSelectForm} />
        {!!this.formController && this.props.item.reportType !== 'filter' && <MultiPickerView
          globalStyle={GlobalStyle.style}
          label='Field'
          options={this.formController.formFields}
          values={[{ label: this.fieldLabel }]}
          pickerScreenTitle='Select field'
          onSelect={this.onSelectField} />}
        {!!this.formController &&
        <FieldBase label='Filter data' globalStyle={GlobalStyle.style}>
          <View style={{ padding: 10, paddingTop: 0, paddingBottom: 0 }}><IconButton
            label={this.props.item.filter ? 'Edit filter' : 'Apply filter'} onPress={this.filter} name='filter' /></View>
          {!!this.props.item.filter &&
          <View style={{ padding: 10 }}><IconButton label='Clear Filter' onPress={this.clearFilter} name='trash' /></View>}
        </FieldBase>
        }

      </ScrollView>
      <ActionButton
        buttonColor={GlobalStyle.style.primaryColour}
        position='right'
        outRangeScale={2}
        bgColor='rgba(0,0,0,0.5)'
        radius={180}
      >
        <ActionButton.Item
          size={50}
          buttonColor={GlobalStyle.style.secondaryColour}
          title={Translate.do('Save')}
          onPress={this.save}>
          <IconFA name='save' style={{ fontSize: 25, color: GlobalStyle.style.secondaryColourText }} />
        </ActionButton.Item>
        <ActionButton.Item
          size={50}
          buttonColor={GlobalStyle.style.secondaryColour}
          title={Translate.do('Delete')}
          onPress={this.props.onDelete}>
          <IconFA name='trash' style={{ fontSize: 25, color: GlobalStyle.style.secondaryColourText }} />
        </ActionButton.Item>
      </ActionButton>
    </View>)
  }
}

const REPORT_TYPES = [
  { label: 'Total', value: 'sum' },
  { label: 'Average', value: 'mean' },
  { label: 'Field Count', value: 'count' },
  { label: 'Report Count', value: 'filter' }
]

const INTERVALS = [
  { label: '1 day', value: 1 },
  { label: '7 days', value: 7 },
  { label: '14 days', value: 14 },
  { label: '30 days', value: 30 },
  { label: '90 days', value: 90 },
  { label: '1 year', value: 365 },
  { label: 'lifetime', value: 365 * 7 }
]

export default Reporting
export { ReportDetail, ReportItemDisplay, ReportItemDetail }
