class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
      this.profile.innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
           <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
           </div>
           <div class="col-md-9">
             <span class="badge bg-primary">
             Followers:${user.followers}
             </span>
             <span class="badge bg-primary">
             Public Repos:${user.public_repos}
             </span>
             <span class="badge bg-success">
             Public Gists:${user.public_gists}
             </span>
             <span class="badge bg-success">
             Following:${user.following}
             </span>
             <br><br>
             <ul class="list-group">
              <li class="list-group-item">Company:${user.company}</li>
              <li class="list-group-item">Website/Blog:${user.blog}</li>
              <li class="list-group-item">Location:${user.location}</li>
              <li class="list-group-item">Member since:${user.created_at}</li>
             </ul>
           </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repositories</h3>
        <div id="repos"></div>
      `;
    }
    // show user repos
    showRepos(repos){
      let output = '';

      repos.forEach(function(repo){
       output += `
        <div class="card card-body mb-2">
          <div class="row">
           <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <br>
            <span class="badge bg-info">Language: ${repo.language}</span>
           </div>
           <div class="col-md-6">
            <span class="badge bg-primary">
             Stars:${repo.stargazers_count}
            </span>
            <span class="badge bg-primary">
             Watchers:${repo.watchers_count}
            </span>
            <span class="badge bg-success">
             Public Forks:${repo.forms_count}
            </span>
           </div>
          </div>
        </div>
       `;
      });

    //   output repos
    document.getElementById('repos').innerHTML = output;
    }
    // show alert
    showAlert(message,className){
        // clear any remaining alerts
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add class
        div.className = className;
        // add text node
        div.appendChild(document.createTextNode(message));
        // find parent
        const container = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div,search);

        // set timeout
       setTimeout(()=>{
           this.clearAlert();
       },3000)
    }
    // clear alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove()
        }
    }
    // clear profile
    clearprofile(){
        this.profile.innerHTML = '';
    }
}