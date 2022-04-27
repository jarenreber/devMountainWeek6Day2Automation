const { Builder, Capabilities } = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie, deleteMovie, crossOffMovie, isAlert } = require('../functions/testMovie')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test('deleteMovie', async () => {
    await deleteMovie(driver)
})

test('crossed off movie', async () => {
    await crossOffMovie(driver)
    driver.sleep(1000)
})

test('is alert showing when deleting movie', async () => {
    await isAlert(driver)
    driver.sleep(1000)
})