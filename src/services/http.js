export class ApiResponder {
    /**
     * @param {Response} response
     */
    constructor(response) {
        this.response = response
    }

    send(content, statusCode) {
        this.response.status(statusCode)
        this.response.json(content)
    }

    sendOk(content = {message: "Ok"}) {
        this.send(content, 200)
    }

    sendCreated(content= {message: "Created"}) {
        this.send(content, 201)
    }

    sendAccepted(content= {message: "Accepted"}) {
        this.send(content, 202)
    }

    sendBadRequest(content= {message: "Bad Request"}) {
        this.send(content, 400)
    }

    sendUnauthorized(content= {message: "Unauthorized"}) {
        this.send(content, 401)
    }

    sendForbidden(content= {message: "Forbidden"}) {
        this.send(content, 403)
    }

    sendNotFound(content= {message: "Not Found"}) {
        this.send(content, 404)
    }

    sendInternalError(content= {message: "Internal Error"}) {
        this.send(content, 500)
    }
}