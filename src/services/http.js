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
        return this
    }

    sendOk(content = {message: "Ok"}) {
        return this.send(content, 200)
    }

    sendCreated(content= {message: "Created"}) {
        return this.send(content, 201)
    }

    sendAccepted(content= {message: "Accepted"}) {
        return this.send(content, 202)
    }

    sendBadRequest(content= {message: "Bad Request"}) {
        return this.send(content, 400)
    }

    sendUnauthorized(content= {message: "Unauthorized"}) {
        return this.send(content, 401)
    }

    sendForbidden(content= {message: "Forbidden"}) {
        return this.send(content, 403)
    }

    sendNotFound(content= {message: "Not Found"}) {
        return this.send(content, 404)
    }

    sendInternalError(content= {message: "Internal Error"}) {
        return this.send(content, 500)
    }
}