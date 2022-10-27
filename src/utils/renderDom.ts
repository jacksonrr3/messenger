export default (selector: string, compiledTemplate: string) => {
  const el = document.getElementById(selector);
  if (el) {
    el.innerHTML = compiledTemplate;
  }
};
