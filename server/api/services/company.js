'use strict'
const Company = require('../models/Company').model
const User = require('../models/User').model
const UserRoutes = require('../routes/User')
const emailSvc = require('../services/email')

/**
 * Create a new company with a defauly admin user
 * @param company
 * @returns {Promise.<TResult>}
 */
async function create (company) {
  console.log(company)
  let newCompany = new Company(Object.assign({}, company, {
    groups: [{
      name: 'Administrators',
      users: [],
      permissions: {}
    }],
    plan: 'trial'
  }))

  let newUser = new User({
    username: company.adminEmail,
    email: company.adminEmail,
    domain: company.domain,
    firstName: 'Admin',
    lastName: 'User'
  })

  if (!company.name) {
    throw new Error('Error: Please provide a company name')
  }

  if (!company.adminEmail) {
    throw new Error('Error: Please provide an admin email')
  }

  if (!company.domain) {
    throw new Error('Error: Please provide company domain')
  }

  newUser.password = 'temppass'
  newUser = await newUser.save()
  newCompany.groups[0].users.push(newUser)
  newCompany = await newCompany.save()

  let allPermissions = Object.keys(JSON.parse(JSON.stringify(newCompany.groups[0].permissions)))
  allPermissions.forEach(permission => {
    newCompany.groups[0].permissions[permission] = true
  })

  newUser.company = newCompany
  await newUser.save()
  await newCompany.save()

  await UserRoutes.resetPasswordAndNotify(newCompany.domain, newUser.username)

  emailSvc.send(`
    Company: ${company.name}\n
    User: ${newUser.email}\n
    Domain: ${company.domain}\n
  `, 'New trial started', newUser.email, company.name, 'sales@efrs.io')

  return newCompany
}

module.exports = {
  create
}
