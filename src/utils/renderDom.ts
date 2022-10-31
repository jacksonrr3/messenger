import Block from '../core/Block';

export default (query: string, block: Block) => {
  const root = document.getElementById(query);
  if (root) {
    root.innerHTML = '';
    root.appendChild(block.getContent());
  }

  block.dispatchComponentDidMount();
  return root;
};
