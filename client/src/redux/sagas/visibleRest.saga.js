
function* resaurantsWorker (action) {
  try {
      const words = yield call(getRestFromBack, action.payload);
      yield put(setWords(words));
  } catch (e) {
      yield put({type: SET_WORDS, payload: [{id:1, word:'server is death'}]});
  }
}

function* resaurantsWatcher() {
  yield takeEvery(SET_VISIBLE_WORDS, resaurantsWorker);
}

export default resaurantsWatcher
