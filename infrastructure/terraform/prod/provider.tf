provider "aws" {
  profile = "default"
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "fs-infrastructure-bucket"
    key    = "web/state"
    region = "us-east-1"
  }
}