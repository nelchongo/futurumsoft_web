module "application" {
    source = "git@github.com:NelsonECandia/fs_infrastructure.git?ref=v0.10.4"
    app_name = "futurumsoftweb"
    tags = local.tags
    app_port = 80
    lb_health_check_path = "/"
    lb_is_public = false
    lb_certificate_arn = "arn:aws:acm:us-east-1:549532010890:certificate/a2eba18a-1b40-4eb8-8650-f8ad824828c2"
    route_53_hosted_zone_id = "Z04211931VZIR5O4OUFHD"
    is_rds_available = false
    tg_api_token = "" #SET ONLY ON FIRST START
    twingate_available = false
    nat_available = false
}