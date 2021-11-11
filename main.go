package main

import (
	"log"
	"go-svelte-reproduce/goPkg/APIs"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main(){
	router := gin.Default()
	store := cookie.NewStore([]byte("secret"))
  router.Use(sessions.Sessions("userSession", store))


	router.Use(static.Serve("/", static.LocalFile("./svelteBuild", true)))

	api := router.Group("/api")
	api.Use()
	{
		v1 := api.Group("/v1")
		v1.POST("/tryLogin", apis.LoginHandler)

	}

	err := router.Run(":9000")
	if err != nil {
		log.Fatalln(err)
	}


}