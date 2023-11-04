export const Button = (props) => {
  let clases = `bg-slate-400 w-auto px-12 py-2 rounded-lg text-slate-900 hover:bg-slate-300 ${props.clases}`;
  return (
    <button className={clases}>
      <b>{props.children.toUpperCase()}</b>
    </button>
  );
};
