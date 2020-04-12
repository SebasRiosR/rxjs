import { fromEvent } from 'rxjs';

//Crear texto
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ipsum at lacus tristique consectetur. Aenean suscipit consequat velit. Sed scelerisque auctor enim, quis vehicula erat ornare sit amet. Nulla maximus efficitur erat id ullamcorper. Phasellus vitae nulla viverra, vestibulum turpis et, dictum purus. In vehicula ante et ex lacinia venenatis. Ut dictum commodo nunc, eget bibendum sem sodales non.
<br/><br/>
Nam metus lacus, eleifend ut tellus et, convallis malesuada leo. Mauris posuere lobortis pretium. Aenean euismod libero ac dolor interdum, eu porta tortor ultricies. Aenean porta sed sem at vehicula. Curabitur sit amet semper odio. Nullam porttitor fermentum purus eget ornare. Vivamus gravida feugiat nunc in volutpat. Ut at sagittis eros, sit amet cursus nibh.
<br/><br/>
Suspendisse ullamcorper sem leo, et auctor leo ornare a. Ut elementum vitae risus eu fringilla. Vestibulum id turpis vehicula, ultrices nisi scelerisque, vulputate sapien. In ut elementum nisi. Fusce vitae dolor ac sapien volutpat mattis vel quis lorem. Ut congue malesuada neque, sed vulputate tellus tempor sit amet. Proin dignissim consequat diam at mollis.
<br/><br/>
Cras id molestie odio. Donec a tellus rutrum risus semper ultrices. Suspendisse et semper justo. Integer malesuada, urna vitae facilisis vestibulum, enim lacus laoreet nisi, ut consectetur arcu magna a erat. Nam condimentum, orci ut convallis vehicula, felis felis pulvinar ante, quis finibus mi enim ut purus. Vestibulum eget dolor egestas, viverra nisi et, ornare nunc. Donec egestas efficitur mattis. Etiam viverra auctor metus, nec consequat sapien. Integer ut purus vel arcu condimentum aliquam. Vivamus non eros odio. Aliquam est urna, dictum non condimentum eget, euismod id ipsum. Integer sagittis elementum diam et semper. Quisque tellus sem, finibus eget commodo ac, semper vitae nunc. Mauris nec dolor interdum, venenatis lacus vel, placerat diam. Nunc elementum nibh sed bibendum tincidunt. Morbi sodales dictum elit quis gravida.
<br/><br/>
Fusce non ligula pretium augue accumsan maximus et non erat. Praesent et ex lacinia, suscipit quam id, facilisis enim. Vivamus a convallis turpis. Sed luctus rhoncus quam, ac interdum ipsum porttitor et. Ut ac tellus ut sapien sodales varius. Vestibulum venenatis pharetra arcu vel molestie. Vestibulum vulputate feugiat iaculis. Maecenas ultrices velit diam, id egestas justo auctor eget. Suspendisse laoreet, enim ut ullamcorper convallis, nisi nisl faucibus felis, eget tincidunt urna sapien quis elit. Nam iaculis consectetur velit ac accumsan. Suspendisse scelerisque, neque at eleifend vehicula, arcu ligula gravida dui, id scelerisque felis mi sed orci. Suspendisse consequat condimentum ipsum nec faucibus. Morbi porta eleifend massa, eu faucibus arcu gravida pulvinar. Mauris molestie turpis in dolor auctor, sed viverra justo tempus. Duis sagittis at lectus ac faucibus.
<br/><br/>
Nunc quis neque risus. Donec condimentum nulla a tellus porta, ac mollis massa cursus. Quisque volutpat lacus nunc, quis dapibus ligula finibus a. Mauris semper diam tempor, gravida velit quis, luctus est. Nam vel suscipit ligula, eu feugiat turpis. Suspendisse a facilisis ipsum. Aliquam laoreet id orci nec egestas. Pellentesque pulvinar nisl in ex fringilla, sed condimentum felis tristique. Pellentesque aliquam quam id tempor molestie. Morbi quis maximus metus.
<br/><br/>
Vivamus ligula sem, laoreet non mauris eget, porta laoreet nisi. Proin blandit tincidunt arcu, ac tempus nisi tristique ut. Curabitur bibendum, ligula non feugiat faucibus, sem ipsum efficitur ante, et feugiat dui odio quis ipsum. Mauris tristique, libero at dapibus finibus, lorem odio lacinia est, in congue lacus neque sed lectus. Morbi pulvinar urna vel quam sodales, vel egestas nisi pulvinar. Cras volutpat purus at pellentesque imperdiet. Etiam id dapibus nulla. Pellentesque posuere magna ipsum, vitae lobortis erat tincidunt ac. Nulla interdum fringilla nunc ut tempor. Donec lacinia nisl eget justo commodo tincidunt.
`
//Obtener el body del HTML
const body = document.querySelector('body');
body.append(texto);

//Crear la barra de progreso
const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//Se implementa el observable y observador para el scroll
fromEvent(document, 'scroll').subscribe(event => {
    progressBar.setAttribute('style', 'width: ' + calculatePercentage(event) + '%');
});

//Funcion que calcula el porcentaje de scroll
function calculatePercentage(event: Event) {
    //Esto se llama desestructuracion de objetos
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target['documentElement'];
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}