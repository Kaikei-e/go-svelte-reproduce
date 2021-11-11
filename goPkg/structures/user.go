package structures

type LoginUser struct {
	SessionToken    string `json:"sessionToken"`
	Password string `json:"password"`
	ID       string `json:"id"`
}
