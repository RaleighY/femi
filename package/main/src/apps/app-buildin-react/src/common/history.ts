import { createBrowserHistory } from "history"
import { APP_BUILDIN_REACT } from "@constants/appPath"

const history = createBrowserHistory({
  basename: APP_BUILDIN_REACT,
})

history.listen(location => {
  // you can do url track here
})

export default history
