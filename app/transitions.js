export default function(){
  this.transition(
    this.fromRoute('login'),
    this.toRoute('index'),
    this.use('toDown'),
    this.reverse('toUp')
  );
}
