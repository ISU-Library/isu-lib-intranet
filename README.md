<h1>To clone the ISU-Lib-Repo for a new environment:</h1>
* you will need some sort of vm locally and mysql db.

1. cd to desired site location
2. run the following command `$ git clone git@github.com:Msteimel/-isu-lib-intranet.git`
3. answer any needed questions.
4. run `$ composer install` - this uses composer file to generate files not included in Repo

- might have to install composer if not on computer

5. cd into the `web` folder and run `$ npm install` to install node modules for front-end build tools.

- might have to install node
- probably can skip if not working with CSS/SCSS or JS files

6. To share Drupal config, you need to set the UUID of the site as the same you're sharing with.
   6a) `$drush config-get "system.site" uuid` to print site's UUID.
   6b) `$drush config-set "system.site" <NEW UUID>` - This should be set as the UUID for the site from the web server.

As of now, this will not copy the DB info from dev, but it's something we could look into to share content, making DEV and PROD sites closer.

Drupal relies on config files for setting up things like content types, paragraph types, and most other things set through the admin.
You can share these config files between sites once the UUID is the same for all the sites (local, dev server, prod, etc)

1. Drupal config files will be stored in `config/sync/`
2. use `$ drush config-export --destination=config/sync` to export config files.
3. use `$ drush config-import --source=config/sync` to import config files.
   OR

1) You can create/edit `settings.php`
2) uncommit or add (I forget which) `$settings['config_sync_directory'] = '../config/sync';`

- This sets the config location so can simply run `$ drush config-export` and `drush config-export`

<h2>Recommended steps for sharing code</h2>
1. export config: `$ drush cex` (drush config-export)
2. commit: `$ git add && git commit`
3. merge: `$ git pull`
4. Update dependencies: `$ composer install`
5. Run updates: `$ drush updb`
6. Import configuration: `$ drush cim` (drush config-import)
7. push: `$git push`
source: https://events.drupal.org/vienna2017/sessions/advanced-configuration-management-config-split-et-al

<h2> Config import issues </h2>
  - If modules between websites are not in synch, you cannot import config without errors.
    - name of module will appear <em>MODULE_NAME<em> if it's not installed
  - *If after running `$drush cex` it says "Shortcut" or "Shortcut Links" 
      1) on website go to admin>config>User interface group>Shortcuts>Default>Link List
      2) Delete the link in there (probably just two for a new site install)
      3) try config import again

Links for reference
https://drupal.stackexchange.com/questions/150481/how-can-i-import-the-configuration-on-a-different-site - second answer
https://evolvingweb.ca/blog/using-configuration-management-and-git-drupal-8

<h2>Sequence for Updating modules</h2>
1) Update code: $ composer update
2) Run Updates: $ drush updb
3) export updated config: $ drush cex
4) commit: $ git add && git commit
5) Push: $ git

<h2>Guide to Disable Cacheing for dev.</h2>
https://www.drupal.org/node/2598914
