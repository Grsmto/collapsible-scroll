describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should show profile details screen', async () => {
    await expect(element(by.text('Add your info')).atIndex(1)).toBeVisible();
  });

  it('should enable submit button once form is filled', async () => {
    await element(by.label('First name')).atIndex(0).typeText('Foo');
    await element(by.label('Last name')).atIndex(0).typeText('Bar');
    await element(by.label('Phone number')).atIndex(0).typeText('099999999');
    await element(by.label('Email')).atIndex(0).typeText('foo@bar.com');
    await element(by.label('Age')).atIndex(0).typeText('99');

    await expect(element(by.text('Submit'))).toHaveId('submit_button');
  });
});
