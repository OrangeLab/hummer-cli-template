Pod::Spec.new do |spec|
  spec.name = 'YogaKit'
  spec.version = '1.9.0'
  spec.license =  { :type => 'MIT', :file => "LICENSE" }
  spec.homepage = 'https://yogalayout.com/'
  spec.documentation_url = 'https://yogalayout.com/docs'

  spec.summary = 'Yoga is a cross-platform layout engine which implements Flexbox.'
  spec.description = 'Yoga is a cross-platform layout engine enabling maximum collaboration within your team by implementing an API many designers are familiar with, and opening it up to developers across different platforms.'

  spec.authors = 'Facebook'
  spec.source = { :path => "./" }
  spec.platforms = { :ios => "8.0", :tvos => "10.0" }
  spec.module_name = 'YogaKit'
  spec.requires_arc = false
  spec.source_files = 'YogaKit/**/*.{h,m}'
  spec.public_header_files = 'YogaKit/**/*.h'

end
