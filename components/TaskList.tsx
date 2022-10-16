export default function TaskList(): JSX.Element {
  // https://stackoverflow.com/questions/74020543/how-to-disable-prettier-for-pre-or-code-blocks-so-that-new-lines-line-break
  // prettier-ignore
  return (
    <pre style={{ maxWidth: '900px', overflow: 'auto' }}>
        TODO:
        - add a tool that allows picking a color from somewhere else on the screen, such as a photo
        - get color wheel working
        - deploy to GH Pages
        - support loading new JSON book to localStorage
        - filter which books to include
        - allow clustering by book
        - add 2 other styles of color picker, synched with the first
        - add Google Analytics
        - get a URL
    </pre>
  );
}
