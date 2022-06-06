FROM golang:latest
WORKDIR /usr/share/app/backend
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .
ENV PORT 3000
RUN go build main.go
CMD ["./main"]