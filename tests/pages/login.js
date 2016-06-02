import PageObject from 'gitzoom/tests/page-object';

const {
  create,
  visitable
} = PageObject;

export default create({
  visit: visitable('/login')
});
