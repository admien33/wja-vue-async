source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "3.5.0"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"
# then overriding !
# https://jekyllrb.com/docs/themes/#overriding-theme-defaults


# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
   gem "jekyll-feed", "~> 0.6"
   #temp with jekyll >= 3.5
   gem 'jekyll-assets', git: 'https://github.com/jekyll/jekyll-assets', branch: 'master'	
   # gem 'jekyll-assets'
end

# addons assets plugin, build time x 2-3,  compress options false or true!
# gem 'autoprefixer-rails'
# gem 'uglifier'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

