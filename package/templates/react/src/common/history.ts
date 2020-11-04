import { createBrowserHistory } from "history"
import { APP_REACT } from "@constants/appPath"

const history = createBrowserHistory({
  basename: APP_REACT,
})

history.listen(location => {
  // you can do url track here
})

export default history
