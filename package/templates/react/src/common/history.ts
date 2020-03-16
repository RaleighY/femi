import { createBrowserHistory } from "history"
import { APP_HOME } from "@constants/appPath"

const history = createBrowserHistory({
  basename: APP_HOME,
})

history.listen(location => {
  // you can do url track here
})

export default history
