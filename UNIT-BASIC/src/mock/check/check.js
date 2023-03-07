// predicate를 받아서 true면 onSuccess, false면 onFail을 실행하는 함수
function check(predicate, onSuccess, onFail) {
    if (predicate()) {
        onSuccess('yes');
    } else {
        onFail('no');
    }
}

module.exports = check;