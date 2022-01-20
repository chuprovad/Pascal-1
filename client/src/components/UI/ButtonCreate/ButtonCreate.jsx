import classes from './ButtonCreate.module.css';

export default function ButtonCreate({ children, ...props }) {
  return (
    <button {...props} style={{borderColor: props.color}} className={classes.btnCreate}>
      {children}
    </button>
  );
}
