package router

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type muxRouter struct {
	
}

var (
	muxDispatcher = mux.NewRouter()
)

func NewMuxRouter() *muxRouter {
	return &muxRouter{}
}
func (*muxRouter) GET(uri string, f func(w http.ResponseWriter, r *http.Request)) {
	muxDispatcher.HandleFunc(uri, f).Methods("GET")
}
func (*muxRouter) POST(uri string, f func(w http.ResponseWriter, r *http.Request)) {
	muxDispatcher.HandleFunc(uri, f).Methods("POST")
}
func (*muxRouter) PUT(uri string, f func(w http.ResponseWriter, r *http.Request)) {
	muxDispatcher.HandleFunc(uri, f).Methods("PUT")
}
func (*muxRouter) DELETE(uri string, f func(w http.ResponseWriter, r *http.Request)) {
	muxDispatcher.HandleFunc(uri, f).Methods("DELETE")
}
func (*muxRouter) SERVE(port string) {
	log.Println("Mux Http server running on port %v", port)
	http.ListenAndServe(port, muxDispatcher)
}
