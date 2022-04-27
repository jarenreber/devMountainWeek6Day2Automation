const {By} = require('selenium-webdriver')


const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()

}


const deleteMovie = async (driver) => {
    await addMovie(driver)

    await driver.findElement(By.xpath('//ul/li[1]/button')).click()
    // isDeleted = movie.isDisplayed()

    const list = await driver.findElement(By.xpath('//ul'))

    expect(list.hasChildren).toBeFalsy()
}

const crossOffMovie = async (driver) => {
    await addMovie(driver)
    await driver.findElement(By.xpath('//span')).click()
    let checked = await driver.findElement(By.css('.checked'))

    expect(checked).toBeTruthy()
    driver.sleep(1000)

}

const isAlert = async (driver) => {
    await deleteMovie(driver)
    
    message = await driver.findElement(By.css('aside'))
    expect(message.isDisplayed()).toBeTruthy()

    driver.sleep(1000)
}

module.exports = {
    deleteMovie,
    crossOffMovie,
    isAlert
}