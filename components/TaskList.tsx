export default function TaskList(): JSX.Element {
  // https://stackoverflow.com/questions/74020543/how-to-disable-prettier-for-pre-or-code-blocks-so-that-new-lines-line-break
  // prettier-ignore
  return (
    <pre style={{ maxWidth: '900px', overflow: 'auto' }}>
      {`TODO:
    - OKLCH sliders
    - re-enable hot-reloading
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
