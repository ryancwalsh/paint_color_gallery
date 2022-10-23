export default function TaskList(): JSX.Element {
  // https://stackoverflow.com/questions/74020543/how-to-disable-prettier-for-pre-or-code-blocks-so-that-new-lines-line-break
  // prettier-ignore
  return (
    <pre style={{ maxWidth: '900px', overflow: 'auto' }}>
      {`TODO:    
    - re-enable hot-reloading
    - fix tests
    - use awesome OKLCH components from https://oklch.evilmartians.io/#66.23,0.038,90.9,100
    - read from URL
    - add favorites
    - figure out why history gets messed up
    - add search
    - allow clustering by book 
    - add 2 other styles of color picker, synched with the first 
    - add Google Analytics 
    - get a URL
    `}
    </pre>
  );
}
