// https://epicreact.dev/css-variables/

function ThemeToggler() {
  const [theme, setTheme] = React.useState('light')
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])
  return (
    <button onClick={() => setTheme(nextTheme)}>
      Change to {nextTheme} mode
    </button>
  )
}