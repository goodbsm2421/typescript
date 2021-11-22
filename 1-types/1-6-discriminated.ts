{
    type SuccessState = {
        result: 'success'
        response: {
            body: string;
        }
    }
    type FailState = {
        result: 'fail'
        reason: string;
    }

    type LoginState = SuccessState | FailState

    function login(): SuccessState | FailState {
        return {
            result: 'success',
            response : {
                body: 'logged in',
            }
        }
    }

    // PrintLoginState(state)
    function PrintLoginState(state: LoginState) {
        if(state.result === 'success') {
            console.log(state.response.body)
        } else {
            console.log(state.reason)
        }
    }
}