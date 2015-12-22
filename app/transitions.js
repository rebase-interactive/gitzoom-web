export default function(){
  this.transition(
    this.fromRoute('login'),
    this.toRoute('protected'),
    this.use('revealDown', { easing: 'easeInOutCubic' })
  );
}
