@direct_requests_to_user.each do |direct_request|
  json.set! direct_request.id do
    json.partial! 'direct_request', direct_request: direct_request
  end
end

@direct_requests_by_user.each do |direct_request|
  json.set! direct_request.id do
    json.partial! 'direct_request', direct_request: direct_request
  end
end
