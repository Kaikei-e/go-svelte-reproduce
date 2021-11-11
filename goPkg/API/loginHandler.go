package api

import (
	"go-svelte-reproduce/goPkg/structures"

	"github.com/gin-gonic/gin"
)

func LoginHandler(ctx *gin.Context ){
	var user structures.LoginUser

	errBind := ctx.BindJSON(&user)


	

}