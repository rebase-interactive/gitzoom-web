import PageObject from 'gitzoom/tests/page-object';

let {
  visitable
} = PageObject;

export default PageObject.create({
  visit: visitable('/login')
});
