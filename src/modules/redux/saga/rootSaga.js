import { spawn } from 'redux-saga/effects';
import { watcherLaunch } from '../../../views/launchScreen/saga/index'

export default function* rootSaga() {
    yield spawn(watcherLaunch);
}
