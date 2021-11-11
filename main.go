package main

import (
	"log"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main(){
	router := gin.Default()
	store := cookie.NewStore([]byte("secret"))
  router.Use(sessions.Sessions("mysession", store))


	router.Use(static.Serve("/", static.LocalFile("./svelteBuild", true)))

	api := router.Group("api")
	api.Use()
	{
		v1 := api.Group("v1")
		v1.POST("tryLogin", )

	}

	err := router.Run(":8000")
	if err != nil {
		log.Fatalln(err)
	}


}