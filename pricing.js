function getPrice (docs) {
  return 0.487921 * Math.pow(docs, -0.1243027)
}

function totalPrice (docs) {
  const docPrice = getPrice(docs)
  return docs * docPrice
}

function yearly (users, usage) {
  console.log(`--- ${users} users ----`)
  console.log('Total docs / year', usage * users * 12)
  console.log('Doc Price', getPrice(users * usage))
  console.log('Monthly spend $', Math.round(totalPrice(users * usage)))
  console.log('Yearly spend $', Math.round(totalPrice(users * usage) * 12))
  console.log('Cost per user per year $', Math.round(totalPrice(users * usage) * 12 / users))
  console.log('-----------')
}

yearly(1, 4)
yearly(80, 4)
yearly(150, 5 * 30)
