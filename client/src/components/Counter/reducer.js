export default function (action, state) {
  switch(action.type) {
  case 'add':
    return {
      counter: state.counter + 1
    }
  }
  return state
}
