class Github{
    constructor(){
        this.client_id = '06f1a036e8921fba3fab';
        this.client_secret = '778ec2a64b884a5b7849e7d5786f4233380f00ac';
        this.repos_count = 15;
    }

    async getUser(user){
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&
        client_secret=${this.client_secret}`)

        const repoResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&client_id=${this.client_id}&
        client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
         profile,
         repos
        }
    }
}