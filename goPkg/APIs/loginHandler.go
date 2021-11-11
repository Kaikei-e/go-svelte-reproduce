package apis

import (
	"fmt"
	"go-svelte-reproduce/goPkg/sessionManager"
	"go-svelte-reproduce/goPkg/structures"
	"log"

	"github.com/gin-gonic/gin"
)

func LoginHandler(ctx *gin.Context ){
	var user structures.LoginUser

	errBind := ctx.BindJSON(&user)
	if errBind != nil {
		log.Panicln(errBind)
	}

	fmt.Println(user.Password)
	fmt.Println(user.ID)
	
	ctx.SetCookie("userSession", sessionmanager.SIDMaker(), 3600, "/", "localhost", false, true)

	if user.Password == "hogehoge" && user.ID == "Gopher"{
		user.SessionToken = sessionmanager.SIDMaker()

		ctx.JSON(200, gin.H{
			"userID": user.ID,
			"userToken": user.SessionToken,
		})
		
	}else{
		ctx.JSON(500, gin.H{
			"userData": "error",
		})
		
	}


}