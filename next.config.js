const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withContentlayer(nextConfig)

const withYAML = require('next-yaml')
module.exports = withYAML(module.exports)
