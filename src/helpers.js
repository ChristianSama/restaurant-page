function createBanner(imgSrc, textElement) {
  const banner = document.createElement('div');
  banner.classList.add('banner');

  const img = new Image();
  img.src = imgSrc;
  img.classList.add('image');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  banner.appendChild(img);
  banner.appendChild(overlay);
  banner.appendChild(textElement);
  return banner;
}

function createDummyText() {
  const lorems = [" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices pulvinar enim vel volutpat. Ut dictum gravida fringilla. Fusce aliquam ante vitae lectus tempus, et consectetur nibh laoreet. Praesent nisl lorem, egestas lobortis tortor sed, aliquet placerat urna. Aenean in velit in sapien auctor porta. Duis et sodales massa. Sed molestie nisi velit, sit amet egestas lacus blandit non. In nec eleifend sem, nec dictum felis. Donec volutpat metus lorem, sit amet posuere dolor tincidunt sed. Fusce a nulla tortor. Praesent consequat malesuada tellus ac ultrices. Nullam feugiat sollicitudin imperdiet. Duis mollis pharetra molestie.",
                  "Quisque non sagittis ipsum. Sed semper eleifend magna lobortis scelerisque. Etiam dictum risus felis, laoreet auctor arcu dictum nec. Aliquam sit amet porttitor sem. Nullam commodo mi sit amet leo convallis, eget faucibus tortor aliquam. Aenean condimentum porta leo, quis tempus mi consectetur id. Donec tellus urna, congue quis bibendum in, tincidunt vel lorem. Morbi id turpis lacus. In tincidunt risus in nisl auctor eleifend. In faucibus egestas tortor, et porta nisl molestie a. Curabitur porttitor nisi lectus, et accumsan libero convallis sed. Vivamus dolor nulla, rutrum eu eros eget, elementum ullamcorper lorem. Vivamus aliquet hendrerit nunc id commodo.",
                  "Sed sed aliquam mi. Integer arcu orci, rhoncus in condimentum ac, vehicula at massa. Nullam libero quam, eleifend a sagittis quis, vehicula vitae ligula. Fusce nec orci non felis sagittis maximus. Quisque vel dui et tortor accumsan vestibulum a ac risus. Curabitur iaculis justo quis pulvinar consequat. Aenean nec erat quis ligula tempus feugiat.",
                  "Nunc vehicula porta magna, ullamcorper mollis augue interdum nec. Curabitur rhoncus molestie metus et mattis. Ut cursus lacus non augue consequat bibendum. Aenean mauris metus, elementum eget molestie sit amet, ultrices et erat. Duis id ex nibh. Fusce luctus aliquet justo eu ornare. Maecenas eu nisl massa. Donec lacinia posuere dapibus. Aliquam convallis sapien et maximus viverra. Aenean tincidunt semper lorem, venenatis maximus nunc scelerisque eu. Aliquam a pellentesque leo, ac vestibulum sapien. Etiam euismod porta tempor. Cras volutpat nibh eu consequat consectetur. Curabitur a pellentesque leo, vel dapibus nibh.",
                  "Integer mollis cursus imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras leo lorem, maximus nec neque nec, accumsan fermentum nulla. Maecenas commodo rhoncus lectus eget luctus. Maecenas blandit sagittis justo non hendrerit. Aliquam pellentesque egestas ex, sit amet placerat metus sollicitudin quis. Donec ullamcorper ultrices turpis mollis interdum. Proin erat lectus, pharetra a fermentum a, pellentesque ac orci. Suspendisse placerat sem sed velit aliquet suscipit. Aliquam eget pharetra purus. Cras porttitor egestas velit ut lobortis. Proin eget turpis metus. Ut id orci orci. Aliquam erat volutpat. Duis sed vestibulum quam. Etiam feugiat leo metus, id accumsan sem fermentum quis."];
  return lorems[Math.floor(Math.random() * 5)];
}

function createTitle(text) {
  const title = document.createElement('h1');
  title.textContent = text;
  title.classList.add('title');
  return title;
}

export {createBanner, createDummyText, createTitle};