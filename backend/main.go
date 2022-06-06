package main

import (
	router "backend/http"
	"fmt"
	"io/ioutil"
	"net/http"
)

var (
	httpRouter router.Router = router.NewMuxRouter()
)

func perror(err error) {
    if err != nil {
        panic(err.Error())
    }
}

func main() {
	httpRouter.GET("/api", func(res http.ResponseWriter, req *http.Request) {
		fmt.Fprintln(res, "Up and running...")
	})
	httpRouter.GET("/api/users", func(w http.ResponseWriter, r *http.Request) {
		url := "https://jsonplaceholder.typicode.com/users"
		res, err := http.Get(url)

		if err != nil {
			perror(err)
		}

		// body, err := ioutil.ReadAll(res.Body)
		body, err := ioutil.ReadAll(res.Body)
		
		if err != nil {
			perror(err)
		}
		
		w.Header().Set("Content-Type", "application/json")
		w.Write(body)
	})
	httpRouter.SERVE(":3000")
}
