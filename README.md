<h1>To clone the ISU-Lib-Repo for a new environment:</h1>
* you will need some sort of vm locally and mysql db.

<ol>
  <li>cd to desired site location</li>
  <li>run the following command `$ git clone git@github.com:Msteimel/-isu-lib-intranet.git`</li>
  <li>answer any needed questions.</li>
  <li>run `$ composer install` - this uses composer file to generate files not included in Repo
    <ol><li>- might have to install composer if not on computer</li></ol>
  </li>
  <li>cd into the `web` folder and run `$ npm install` to install node modoles for front-end build tools.</li>0
  <ol>
    <li>might have to install node</li>
    <li>probably can skip if not working with CSS/SCSS or JS files</li>
  </ol>
  <li>To share Drupal config, you need to set the UUID of the site as the same you're sharing with.
    <ol>
      <li>`$drush config-get "system.site" uuid` to print site's UUID.</li>
      <li> `$drush config-set "system.site" <NEW UUID>` - This shoold be set as the UUID for the site from the web server.</li>
    </ol>
  </li>
</ol>

As of now, this will not copy the DB info from dev, but it's something we could look into to share content, making DEV and PROD sites closer.

Drupal relies on config files for setting up things like content types, paragraph types, and most other things set through the admin.
You can share these config files between sites once the UUID is the same for all the sites (local, dev server, prod, etc)

<ol>
  <li>Drupal config files will be stored in `config/sync/`</li>
  <li>use `$ drush config-export --destination=config/sync` to export config files.</li>
  <li>use `$ drush config-import --source=config/sync` to import config files.</li>
</ol>
   OR
<ol>
  <li>You can create/edit `settings.php`</li>
  <li>uncommit or add (I forget which) `$settings['config_sync_directory'] = '../config/sync';`</li>
</ol>

- This sets the config location so can simply run `$ drush config-export` and `drush config-export`

<h2>Recommended steps for sharing code</h2>
<ol>
  <li>export config: `$ drush cex` (drush config-export)</li>
  <li>commit: `$ git add && git commit`</li>
  <li>merge: `$ git pull`</li>
  <li>Update dependencies: `$ composer install`</li>
  <li>Run updates: `$ drush updb`</li>
  <li>Import configuration: `$ drush cim` (drush config-import)</li>
  <li>push: `$git push`</li>
</ol>
source: https://events.drupal.org/vienna2017/sessions/advanced-configuration-management-config-split-et-al

<h2> Config import issues </h2>
  <ul>
    <li>
      If modules between websites are not in synch, you cannot import config without errors.
        <ul><li>- name of module will appear <em>MODULE_NAME</em> if it's not installed</li></ul>
    </li>
    <li>
      - *If after running `$drush cex` it says "Shortcut" or "Shortcut Links" 
          <ul>
            <li>on website go to admin>config>User interface group>Shortcuts>Default>Link List</li>
            <li>Delete the link in there (probably just two for a new site install)</li>
            <li>try config import again</li>
          </ul>
    </li>
  </ul>
Links for reference
https://drupal.stackexchange.com/questions/150481/how-can-i-import-the-configuration-on-a-different-site - second answer
https://evolvingweb.ca/blog/using-configuration-management-and-git-drupal-8

<h2>Sequence for Updating modules</h2>
<ul>
  <li>Update code: $ composer update</li>
  <li>Run Updates: $ drush updb</li>
  <li>export updated config: $ drush cex</li>
  <li>commit: $ git add && git commit</li>
  <li>Push: $ git</li>
</ul>

<h2>Guide to Disable Cacheing for dev.</h2>
https://www.drupal.org/node/2598914
