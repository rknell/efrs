var showEnterpriseCalculatorFn;

function run () {
  var noUsers = $('#noUsers')
  var noDocuments = $('#noDocuments')
  var noPhotos = $('#noPhotos')
  var totalDocs = $('#totalDocs')
  var docPrice = $('#docPrice')
  var monthlySpend = $('#monthlySpend')
  var yearlySpend = $('#yearlySpend')
  var yearlyDocuments = $('#yearlyDocuments')
  var userCostMonth = $('#userCostMonth')
  var userCostYearly = $('#userCostYear')
  var isPPS = true
  var pricingResult = $('#pricingResult')
  var smallBusinessRecommendation = $('#smallBusinessRecommendation')
  var mediumBusinessRecommendation = $('#mediumBusinessRecommendation')
  var smallBusinessContainer = $('#smallBusinessContainer')
  var mediumBusinessContainer = $('#mediumBusinessContainer')
  var enterpriseContainer = $('#enterpriseContainer')
  var smallBusinessButton = $('.smallBusinessButton')
  var mediumBusinessButton = $('.mediumBusinessButton')
  var enterpriseButton = $('.enterpriseButton')

  mediumBusinessContainer.hide()
  enterpriseContainer.hide()

  var containers = [
    $('#docPriceContainer'),
    $('#yearlyDocumentsContainer'),
    $('#totalDocsContainer'),
    $('#noDocumentsContainer')
  ]

  noUsers.change(recalculate)
  noDocuments.change(recalculate)
  totalDocs.change(calcPrices)
  noPhotos.change(recalculate)

  function resetContainersAndButtons () {
    smallBusinessContainer.hide()
    mediumBusinessContainer.hide()
    enterpriseContainer.hide()
    smallBusinessButton.removeClass('active')
    mediumBusinessButton.removeClass('active')
    enterpriseButton.removeClass('active')
    setTimeout(function () {$(window).trigger('resize.px.parallax')}, 500)
  }

  function showSmallBusiness () {

    // gtag('event', 'small_business_pricing_click', {
    //   'event_category': 'click',
    //   'event_label': 'Clicked Small Business'
    // })

    resetContainersAndButtons()
    smallBusinessButton.addClass('active')
    smallBusinessContainer.show()
  }

  function showMediumBusiness () {

    // gtag('event', 'medium_business_pricing_click', {
    //   'event_category': 'click',
    //   'event_label': 'Clicked Medium Business'
    // })

    resetContainersAndButtons()
    mediumBusinessButton.addClass('active')
    mediumBusinessContainer.show()
  }

  function showEnterpriseCalculator () {

    // if(typeof gtag !== "undefined"){
    //   gtag('event', 'enterprise_pricing_click', {
    //     'event_category': 'click',
    //     'event_label': 'Clicked Enterprise Pricing'
    //   })
    // }


    resetContainersAndButtons()
    enterpriseButton.addClass('active')
    enterpriseContainer.show()
  }

  smallBusinessButton.on('click', showSmallBusiness)
  mediumBusinessButton.on('click', showMediumBusiness)
  enterpriseButton.on('click', showEnterpriseCalculator)

  $('#ppu-label').on('click', function () {
    containers.forEach(function (container) {
      container.hide()
    })
    isPPS = false
    recalculate()
  })

  $('#pps-label').on('click', function () {
    containers.forEach(function (container) {
      container.show()
    })
    isPPS = true
    recalculate()
  })

  function recalculate () {
    totalDocs.val(noUsers.val() * (isPPS ? Number(noDocuments.val()) + Number(noPhotos.val()) : 50))
    calcPrices()
  }

  function calcPrices () {
    var totalDocsVal = totalDocs.val()
    var totalPrice = getPrice(totalDocsVal) * totalDocsVal
    var noUsersVal = noUsers.val()

    smallBusinessRecommendation.hide()
    mediumBusinessRecommendation.hide()
    pricingResult.hide()

    if (totalPrice < 100) {
      smallBusinessRecommendation.show()
    } else if (totalPrice >= 100 && totalPrice < 250) {
      mediumBusinessRecommendation.show()
    } else {
      pricingResult.show()
      docPrice.text(getLocalCurrency(getPrice(totalDocsVal)))
      monthlySpend.text(getLocalCurrency(totalPrice, true))
      yearlySpend.text(getLocalCurrency(totalPrice * 12, true))
      yearlyDocuments.text(totalDocsVal * 12)
      userCostMonth.text(getLocalCurrency(totalPrice / noUsersVal, 2))
      userCostYearly.text(getLocalCurrency((totalPrice / noUsersVal) * 12, true))
    }

    console.log("total price", totalPrice);
  }

  // showEnterpriseCalculatorFn = showEnterpriseCalculator;
  recalculate()
}

function getPrice (docs) {
  return (Math.ceil((0.5 * Math.pow(docs, -0.1243027)) * 100)) / 100
}

function getLocalCurrency (value, round) {
  console.log(JSON.stringify(value), round, value.toFixed(0))
  if(round !== true && round > 0) value = value.toFixed(round)
  else if (round) value = value.toFixed(0)
  return '$' + value
}

run()