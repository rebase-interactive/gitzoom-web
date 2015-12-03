export default function(){
  this.transition(
    this.fromRoute('login'),
    this.toRoute('index'),
    this.use('revealDown', { easing: 'easeInOutCubic' })
  );
}
