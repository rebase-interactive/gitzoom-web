export default function() {
  this.transition(
    this.fromRoute('login'),
    this.toRoute('protected'),
    this.use('revealDown', { duration: 350, easing: 'easeInOutCubic' })
  );
}
