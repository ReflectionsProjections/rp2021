export default function handleMouseMove(event) {
  const width = window.outerWidth;
  const height = window.outerHeight;
  const xOffset = 16;
  const yOffset = 3;
  const mouseXpercentage = (event.clientX / width) * 100; //Math.round(event.pageX / width * 100);
  const mouseYpercentage = (event.clientY / height) * 100 + yOffset; //Math.round(event.pageY / height * 100);
  document.getElementsByTagName('body')[0].style =
    'background: radial-gradient(at ' +
    mouseXpercentage +
    '% ' +
    mouseYpercentage +
    '%, #EF7B23, #ffffff)';
}
