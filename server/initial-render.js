export default (req, res) => {
  const title = 'Test name'
  const initialState = {}
  res.send(`
    <!DOCTYPE html>
		<html>
			<head>
				<title>${title}</title>
        <link href='/style.css' rel='stylesheet' type='text/css'>
      </head>
      <body>
  			<div id="root"></div>
  			<script>
  				window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
  			</script>
  			<script src="/static/bundle.js"></script>
		  </body>
		</html>
  `)
}
