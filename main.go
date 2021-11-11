package main

import (
	"log"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main(){
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./svelteBuild", true)))

	err := router.Run(":8000")
	if err != nil {
		log.Fatalln(err)
	}


}