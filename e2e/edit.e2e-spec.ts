import { browser, by, element } from 'protractor';

describe('Edit', () => {

  beforeEach(() => {
    browser.sleep(3000);
    browser.get('/edit/1');
  });

  const name = element(by.id('name'));
  const street = element(by.id('street'));


  it('should allow viewing a person', () => {
    browser.sleep(3000);
    expect(element(by.css('h3')).getText()).toEqual('test');
    expect(name.getAttribute('value')).toEqual('Jon arryn');
    expect(street.getAttribute('value')).toEqual('1234 first Street');

  });

  it('should allow updating a name', function () {
    const save = element(by.id('save'));
    name.sendKeys(' Won!');
    browser.sleep(2000);
    save.click();
    // verify one element matched this change
    const list = element.all(by.css('app-search table tbody tr'));
    browser.sleep(2000);
    expect(list.count()).toBe(1);
  });
});
